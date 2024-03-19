import React from 'react';
import Navbar from './Navbar';

const AddPermissionLetter = () => {
    return (
        <div className="bg-slate-100 min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden pb-12">
            <Navbar />
            <div className="mx-auto flex w-full max-w-sm flex-col gap-6 bg-slate-300 box-border h-35 w-50 h-90 p-4 flex items-center border-4 rounded-xl mt-20 flex flex-col items-center">
                <h2 className="text-3xl font-semibold">Add Permission Letter</h2>
                <form className="space-y-4">
                    <div className='flex justify-between gap-4'>
                        <div>
                        <div className="form-group">
                                <div className="form-field">
                                    <label className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="input w-50 h-10"
                                        placeholder="Type here"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-field">
                                    <label className="form-label">Input-1</label>
                                    <input
                                        type="text"
                                        className="input w-50 h-10"
                                        placeholder="Type here"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-field">
                                    <label className="form-label">Input-1</label>
                                    <input
                                        type="text"
                                        className="input w-50 h-10"
                                        placeholder="Type here"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-field">
                                    <label className="form-label">Input-2</label>
                                    <input
                                        type="text"
                                        className="input w-50 h-10"
                                        placeholder="Type here"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-field">
                                    <label className="form-label">Input-3</label>
                                    <input
                                        type="text"
                                        className="input w-50 h-10"
                                        placeholder="Type here"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-field">
                                    <label className="form-label">Input-4</label>
                                    <input
                                        type="text"
                                        className="input w-50 h-10"
                                        placeholder="Type here"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="form-group">
                                <div className="form-field ">
                                    <label className="form-label">Type</label>
                                    <select className="input w-50 h-10">
                                        <option value="option1">text</option>
                                        <option value="option2">date</option>
                                        <option value="option3">time</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-field">
                                    <label className="form-label">Type</label>
                                    <select className="input w-50 h-10">
                                        <option value="option1">text</option>
                                        <option value="option2">date</option>
                                        <option value="option3">time</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-field">
                                    <label className="form-label">Type</label>
                                    <select className="input w-50 h-10">
                                        <option value="option1">text</option>
                                        <option value="option2">date</option>
                                        <option value="option3">time</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-field">
                                    <label className="form-label">Type</label>
                                    <select className="input w-50 h-10">
                                        <option value="option1">text</option>
                                        <option value="option2">date</option>
                                        <option value="option3">time</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm hover:bg-slate-800 w-80 h-10 btn bg-slate-800 w-full text-white"
                    >
                        Create form
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddPermissionLetter;
