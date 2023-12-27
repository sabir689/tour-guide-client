import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../FirebaseConfig/AuthProvider';
import SectionTitle from '../../Components/SectionTitle/Sectiontitle';
import TGuides from '../TGuide/Tour/TGuides';
import Swal from 'sweetalert2';

const Community = () => {
    const { user } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        languages: '',
        rating: '',
        description: '',
        image: '',
        tourType: '',
        email: user?.email || '',
    });

    useEffect(() => {
        setFormData((prevData) => ({ ...prevData, email: user?.email || '' }));
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);

        fetch('https://tourist-guide-server-tau.vercel.app/guides', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((responseData) => {
                console.log(responseData);
                if (responseData.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Task Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                    });
                }
            });
    };
    
    return (
        <div className="pt-20">
            <SectionTitle subHeading="Meet our community" heading="Our Tour Guides" />
            <TGuides></TGuides>
            <h1 className="text-6xl text-center mt-10">Join Our community</h1>
            <h2 className="text-center text-3xl mt-8 mb-10">Be A Tour Guide</h2>
            <div className="container mx-auto mt-8">
                <form onSubmit={handleSubmit} className=" mx-auto p-6 bg-green-300 rounded-md shadow-md">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Guide Information Form</h2>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Location</label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Tour Type</label>
                        <select
                            name="tourType"
                            value={formData.tourType}
                            onChange={(e) => setFormData({ ...formData, tourType: e.target.value })}
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        >
                            <option value="" disabled>Select Tour Type</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Cultural">Cultural</option>
                            <option value="Beach">Beach</option>
                            <option value="Wildlife">Wildlife</option>
                            <option value="City">City</option>
                            <option value="Hiking">Hiking</option>
                            <option value="Food">Food</option>
                            <option value="Historical">Historical</option>
                            <option value="Relaxation">Relaxation</option>
                            <option value="Skiing">Skiing</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Languages</label>
                        <input
                            type="text"
                            name="languages"
                            value={formData.languages}
                            onChange={(e) => setFormData({ ...formData, languages: e.target.value })}
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Description</label>
                        <input
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Image</label>
                        <input
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4 flex justify-center">
                        <button type="submit" className="bg-green-800 text-white p-2 rounded-md">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Community;
