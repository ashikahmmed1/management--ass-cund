import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { updateProfile, updateEmail, EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase/firebase.comfig";

const MyProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const photoURL = e.target.photoURL.value.trim();
    const email = e.target.email.value.trim();

    if (!name && !photoURL && !email) {
      return toast.error("Enter Name, Email, or Photo URL to update");
    }

    setLoading(true);

    try {
      // 1️⃣ Update Name and Photo
      if (name || photoURL) {
        await updateProfile(auth.currentUser, {
          displayName: name || user.displayName,
          photoURL: photoURL || user.photoURL,
        });
      }

      // 2️⃣ Update Email if changed
      if (email && email !== user.email) {
        const currentPassword = prompt("Enter your current password to change email:");
        if (!currentPassword) throw new Error("Password required for email change");

        // Re-authenticate first
        const credential = EmailAuthProvider.credential(user.email, currentPassword);
        await reauthenticateWithCredential(auth.currentUser, credential);

        // Update email
        await updateEmail(auth.currentUser, email);
      }

      // 3️⃣ Update context so UI shows new data
      setUser({
        ...user,
        displayName: name || user.displayName,
        photoURL: photoURL || user.photoURL,
        email: email || user.email,
      });

      toast.success("Profile updated successfully!");
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto py-12 px-6">
      <h2 className="text-2xl font-semibold mb-6">Update Profile</h2>

      <form onSubmit={handleUpdate} className="bg-base-100 shadow-md p-6 rounded-xl flex flex-col gap-4">
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            defaultValue={user?.displayName}
            placeholder="Your Name"
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-orange-500"
          />
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            placeholder="Email"
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-orange-500"
          />
        </div>

        <div>
          <label className="block mb-1">Photo URL</label>
          <input
            type="text"
            name="photoURL"
            defaultValue={user?.photoURL}
            placeholder="Photo URL"
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-orange-500"
          />
        </div>

        <button type="submit" disabled={loading} className="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition">
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default MyProfile;
