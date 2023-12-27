import { useContext } from "react";
import { AuthContext } from "../../../FirebaseConfig/AuthProvider";

const AddPack = () => {
    const { user } = useContext(AuthContext);

    const handleAddPack = (event) => {
        event.preventDefault();

        const form = event.target;
        const photo1 = form.photo1.value;
        const tourType = form.tourType.value;
        const tripTitle = form.tripTitle.value;
        const description = form.description.value;
        const price = form.price.value;

        const newAdded = {
            photo1,
            tourType,
            name: user?.displayName,
            email: user?.email,
            tripTitle,
            price,
            description,
        };

        console.log(newAdded);
        fetch('https://tourist-guide-server-tau.vercel.app/packages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(newAdded)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    };

    return (
        <div className="bg-green-400 p-20 text-gray-800">
            <h2 className="text-3xl font-extrabold text-center ">Add a Package</h2>
            <form onSubmit={handleAddPack}>
                <div className="mb-8 ">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-gray-800 text-bold text-2xl">Picture</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="photo1"
                                placeholder="photo1"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-tex  text-gray-800 text-bold text-2xl">tourType</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="tourType"
                                placeholder="tourType"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-gray-800 text-bold text-2xl">Your Name</span>
                        </label>
                        <label className="input-group">
                            <input
                                name='name'
                                type="text"
                                defaultValue={user?.displayName}
                                readOnly
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-gray-800 text-bold text-2xl">Your Email</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="email"
                                defaultValue={user?.email}
                                readOnly
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text  text-gray-800 text-bold text-2xl">Price</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="price"
                                placeholder="Price"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text  text-gray-800 text-bold text-2xl">tripTitle</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="tripTitle"
                                placeholder="tripTitle"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text  text-gray-800 text-bold text-2xl">Description</span>
                        </label>
                        <label className="input-group">
                            <textarea
                                name="description"
                                placeholder="Description"
                                className="input input-bordered w-full h-24"
                            />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Add Service" className="btn btn-block" />
            </form>
        </div>
    );
};

export default AddPack;
