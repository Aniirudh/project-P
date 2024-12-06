import React, { useState } from 'react';

export default function EstimateProject() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        companyName: '',
        source: '',
        projectDescription: '',
        needsNda: 'No'
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.firstName) newErrors.firstName = "First name is required";
        if (!formData.lastName) newErrors.lastName = "Last name is required";
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email is required";
        if (!formData.projectDescription || formData.projectDescription.length < 10) newErrors.projectDescription = "Please provide more details about your project";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length === 0) {
            console.log('Form data:', formData);
            // Handle form submission here
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className="min-h-screen bg-black text-gray-100">
            <main className="container mx-auto px-4 py-12 pt-[120px]">
                <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <label htmlFor="firstName" className="block text-md font-semibold text-white">First Name*</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="mt-1 block w-full p-3 bg-[#25292c]  text-white"
                            />
                            {errors.firstName && <p className="mt-1 text-md text-red-500">{errors.firstName}</p>}
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-md font-semibold text-white">Last Name*</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="mt-1 block w-full p-3 bg-[#25292c]  text-white"
                            />
                            {errors.lastName && <p className="mt-1 text-md text-red-500">{errors.lastName}</p>}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <label htmlFor="email" className="block text-md font-semibold text-white">Email*</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full p-3 bg-[#25292c]  text-white"
                            />
                            {errors.email && <p className="mt-1 text-md text-red-500">{errors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-md font-semibold text-white">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="mt-1 block w-full p-3 bg-[#25292c] text-white"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <label htmlFor="companyName" className="block text-md font-semibold text-white">Company name</label>
                            <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                className="mt-1 block w-full p-3 bg-[#25292c] text-white"
                            />
                        </div>
                        <div>
                            <label htmlFor="source" className="block text-md font-semibold text-white">How did you hear about us?*</label>
                            <select
                                id="source"
                                name="source"
                                value={formData.source}
                                onChange={handleChange}
                                className="mt-1 block w-full p-3 bg-[#25292c] text-white"
                            >
                                <option value="">Select an option</option>
                                <option value="google">Google</option>
                                <option value="referral">Referral</option>
                                <option value="social">Social Media</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="projectDescription" className="block text-md font-semibold text-white">Tell us more about your project*</label>
                        <textarea
                            id="projectDescription"
                            name="projectDescription"
                            value={formData.projectDescription}
                            onChange={handleChange}
                            rows="5"
                            className="mt-1 block w-full p-3 bg-[#25292c]  text-white"
                        ></textarea>
                        {errors.projectDescription && <p className="mt-1 text-md text-red-500">{errors.projectDescription}</p>}
                    </div>

                    <div>
                        <span className="block text-md font-semibold text-white">Do you need an NDA first?</span>
                        <div className="mt-2 flex gap-4">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="needsNda"
                                    value="Yes"
                                    checked={formData.needsNda === "Yes"}
                                    onChange={handleChange}
                                    className="form-radio text-green-500"
                                />
                                <span className="ml-2">Yes</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="needsNda"
                                    value="No"
                                    checked={formData.needsNda === "No"}
                                    onChange={handleChange}
                                    className="form-radio text-green-500"
                                />
                                <span className="ml-2">No</span>
                            </label>
                        </div>
                    </div>

                    <div className="text-md text-gray-400">
                        Preeminence Lab is committed to processing the above information in order to contact you and talk about your project. Other information is used for statistical purposes and, from time to time, we would like to contact you about our other products and services, as well as other content that may be of interest to you. If you consent to contact you for these purposes, please tick the checkbox below.
                    </div>

                    <button type="submit" className="bg-[#00e5a0] hover:bg-[#00c288] text-black font-medium py-2 px-4 rounded-md">
                        Submit
                    </button>
                </form>
            </main>
        </div>
    );
}

