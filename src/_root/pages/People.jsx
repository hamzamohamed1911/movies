import { AiFillStar } from "react-icons/ai";
import { useApi } from "../../store/ApiContext";
import { Link } from "react-router-dom";

const People = () => {
  const { PeopleList } = useApi();

  return (
    <section className="h-full text-babyblue p-8 pt-20 ">
      <h1 className=";lg:text-6xl text-3xl font-bold mb-8 text-blue-400">Popular People</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {PeopleList.map(person => (
          <Link 
            key={person.id}
            to={`/people/${person.id}`} 
            className=" bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-95"
          >
            <div className="flex items-center mb-6">
              <img 
                src={`https://image.tmdb.org/t/p/w200${person.profile_path}`} 
                alt={person.name} 
                className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-blue-400"
              />
              <div>
                <h2 className="text-2xl font-bold text-babyblue">{person.name}</h2>
                <p className="text-blue-300"><strong> Known for: </strong>{person.known_for_department}</p>
              </div>
            </div>
            <div className="space-y-6">
              {person.known_for.map(movie => (
                <div key={movie.id} className="mb-4">
                  <img 
                    src={`https://image.tmdb.org/t/p/w400${movie.backdrop_path || movie.poster_path}`} 
                    alt={movie.title || movie.name} 
                    className="w-full h-64 rounded-lg mb-2 object-cover hover:opacity-90 transition-opacity duration-300"
                  />
                  <div className="flex justify-between"> 
                  <h1 className="text-lg font-semibold text-babyblue">{movie.title || movie.name}</h1>
                  <h1 className="text-lg bg-blue p-2 rounded-lg font-bold text-white">{movie.media_type}</h1>

                  </div>
                  <div className="flex items-center">
                    <AiFillStar color="gold" size={20} />
                    <span className="ml-2 text-babyblue">
                    <p className="text-md text-blue-300"><strong>Rating:  </strong>{movie.vote_average} ({movie.vote_count} votes)</p>
                    </span>
                  </div>

                </div>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default People;