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
        Welcome to Rental cars 🚘
      </h1>
      <p
        style={{
          marginTop: '30px',
          marginBottom: '60px',
          marginLeft: '10%',
          width: '50%',
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        cupiditate, alias repudiandae perferendis quidem sint, sequi esse odio
        dignissimos quisquam ut ex harum necessitatibus, similique consequatur
        architecto ipsa sit nihil. Molestias sed inventore praesentium laborum,
        ea hic quidem mollitia!
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
