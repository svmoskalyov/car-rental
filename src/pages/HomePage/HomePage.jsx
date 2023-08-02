import img from 'assets/images/home_m.jpeg';

export const HomePage = () => {
  return (
    <div>
      <h1
        style={{
          marginTop: '40px',
          textAlign: 'center',
          textShadow: '-4px 5px 5px rgba(0,0,0,0.3)',
        }}
      >
        Welcome to Car Rental 🚘
      </h1>
      <p
        style={{
          marginTop: '30px',
          marginBottom: '60px',
          marginLeft: '10%',
          width: '50%',
        }}
      >
        On the website, you can choose a car based on a photo and description,
        if you click the button Learn more, you will see detailed information
        about the car. You can add a car you like to your favorites and view the
        added cars on the favorites tab.
      </p>
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundImage: `url('${img}')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '100%',
          height: 600,
          borderRadius: 12,
          boxShadow: ' 0px 10px 23px 0px rgba(0,0,0,0.75)',
        }}
      ></div>
    </div>
  );
};
