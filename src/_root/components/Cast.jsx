import Slider from 'react-slick';

const Cast = ({ settings, cast }) => {
  return (
    <div className="lg:max-w-2xl py-6 p-2 max-w-[410px]">
      <h1 className="text-babyblue lg:text-3xl text-2xl mb-8">CAST</h1>
      <Slider {...settings}>
      {cast ? (

        cast.map((slide) => (
          <div key={slide.id}>
            <img
              src={`https://image.tmdb.org/t/p/original${slide.profile_path}`}
              alt={slide.name}
              className="cursor-pointer rounded-full lg:w-40 lg:h-40 w-32 h-32"
            />
            <h1 className="text-babyblue lg:text-2xl text-lg font-bold p-4">
              {slide.original_name ||slide.name}
            </h1>
          </div>
        ))
      ) : (
        <div>Cast not found</div>
      )}
      </Slider>
    </div>
  );
};

export default Cast;
