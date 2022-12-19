http://localhost:3001/api/v1/bootcamps?price[gte]=999&sort=rating

Dynamic checkboxes:https://www.positronx.io/react-js-build-multiple-checkbox-with-typescript-tutorial/

Checkbox Algorithm:
const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
const id = parseInt(event.target.value);

    if (price.includes(id)) {
      const pricesCollection = price.filter((elem) => elem !== id);
      setPrice(pricesCollection);
    } else {
      const idCollection = [...price];
      idCollection.push(id);
      setPrice(idCollection);
    }

    console.log('price', price[0]);
    // setPriceRange(event.target.value);

    // push(`?price[gte]=${price[0]}`);

};

Steps: 1. Build a state with all queries 2. Clear filters and redirect to '/'
