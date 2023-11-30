import { useState, useEffect } from 'react';
import './TourTypes.css';

import { Link } from 'react-router-dom';
import SectionTitle from '../../../Components/SectionTitle/Sectiontitle';

const TourTypes = () => {
    const [tourTypes, setTourTypes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://tourist-guide-server-tau.vercel.app/packages');
                const data = await response.json();
                setTourTypes(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading="check it out" heading="Featured Item" />
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <h2 className="text-3xl font-bold mb-10 text-center">Tour Types</h2>
                    <ul className="flex pl-6 gap-5">
                        {tourTypes.map((tour, index) => (
                            <Link to={`/tour/${tour.id}`} key={index}>
                                <li className="text-lg rounded-box border-2 p-4 hover:bg-green-400">
                                    {tour.tourType}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TourTypes;
