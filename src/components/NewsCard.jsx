import { CiShare2 } from "react-icons/ci";
import { FaEye, FaRegBookmark, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
    const {
        id,
        title,
        author,
        thumbnail_url,
        details,
        rating,
        total_view,
    } = news;

    return (
        <div className="card bg-base-100 shadow-md space-y-3">

            <div className="flex justify-between items-center bg-base-200 p-4">
                {/* Author */}
                <div className="flex items-center gap-3 ">
                    <img src={author.img} className="w-10 h-10 rounded-full" />
                    <div>
                        <h2 className="font-semibold">{author.name}</h2>
                        <p className="text-sm text-gray-500">
                            {new Date(author.published_date).toDateString()}
                        </p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <FaRegBookmark size={24} />
                    <CiShare2 size={24} />

                </div>
            </div>

            <div className="p-4 space-y-3">
                {/* Title */}
                <h2 className="text-lg font-bold">{title}</h2>

                {/* Image */}
                <img src={thumbnail_url} className="rounded-lg" />

                {/* Details */}
                <p className="text-sm text-gray-600 pb-5 border-b">
                    {
                        details.length > 200 ? (
                            <>
                                {details.slice(0, 200)}...
                                <Link to={`/news-details/${id}`} className="text-secondary font-semibold cursor-pointer hover:underline">Read More</Link>
                            </>
                        ) : details
                    }

                </p>

                {/* Footer */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 text-orange-500">
                        {[...Array(5)].map((_, index) => (
                            <FaStar
                                key={index}
                                className={index < rating.number ? "text-orange-500" : "text-gray-300"}
                            />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">
                            {rating.number}
                        </span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                        <FaEye /> {total_view}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;