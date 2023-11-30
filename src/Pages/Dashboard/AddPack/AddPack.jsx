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
        <div className="bg-[#F4F3F0] p-20">
            <h2 className="text-3xl font-extrabold text-center ">Add a Package</h2>
            <form onSubmit={handleAddPack}>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Picture</span>
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
                            <span className="label-text">tourType</span>
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
                            <span className="label-text">Your Name</span>
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
                            <span className="label-text">Your Email</span>
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
                            <span className="label-text">Price</span>
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
                            <span className="label-text">tripTitle</span>
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
                            <span className="label-text">Description</span>
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
