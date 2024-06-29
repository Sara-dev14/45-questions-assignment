type Car = {
    manufacturer: string;
    modelName: string;
    [key: string]: any;
  };
  
  function createCar(manufacturer: string, modelName: string, options: { [key: string]: any } = {}): Car {
    return { manufacturer, modelName, ...options };
  }
  
  const myCar = createCar('Toyota', 'Corolla', { color: 'blue', sunroof: true });
  console.log(myCar);
  