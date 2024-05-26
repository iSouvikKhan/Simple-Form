
const Form: React.FC = () => {
    return (
      <div className="bg-gradient-to-br from-green-200 to-green-500 min-h-screen flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-4/5">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-green-700">Survey Form</h1>
          <p className="mb-4 text-sm md:text-base">
            Feel Free To Answer The Questions Below Based On Your Own Experience And Opinion. If You Are Not Convenient In Answering A Particular Question, Please Skip It By Answering "No". Every Answer Would Be Very Appreciated. Thank You For Your Time.
          </p>
          <form className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="flex flex-col">
                <label className="mb-2 font-semibold">Your Name</label>
                <input type="text" className="border p-2 rounded placeholder:text-green-500" placeholder="Enter your name" />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 font-semibold">Your Email Address</label>
                <input type="email" className="border p-2 rounded placeholder:text-green-500" placeholder="user@user.com" />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 font-semibold">Your Phone Number</label>
                <input type="tel" className="border p-2 rounded placeholder:text-green-500" placeholder="9999999999" />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 font-semibold">Where Do You Live?</label>
                <select className="border p-2 rounded">
                  <option>Select</option>
                  <option>CN Office</option>
                  {/* Add options here */}
                </select>
              </div>
              <div className="relative flex flex-col mb-4">
                <label className="absolute -top-3 left-4 bg-white px-1 font-semibold">Age</label>
                <div className="border-2 border-black p-4 rounded flex flex-wrap bg-white">
                  <label className="w-full sm:w-1/2 mb-2">
                    <input type="radio" name="age" className="mr-2" /> 15-20
                  </label>
                  <label className="w-full sm:w-1/2 mb-2">
                    <input type="radio" name="age" className="mr-2" /> 41-50
                  </label>
                  <label className="w-full sm:w-1/2 mb-2">
                    <input type="radio" name="age" className="mr-2" /> 20-30
                  </label>
                  <label className="w-full sm:w-1/2 mb-2">
                    <input type="radio" name="age" className="mr-2" /> Prefer not to say
                  </label>
                  <label className="w-full sm:w-1/2">
                    <input type="radio" name="age" className="mr-2" /> 31-40
                  </label>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="mb-2 font-semibold">How would you rate your proficiency in coding</label>
                <div className="flex flex-col space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="proficiency" className="mr-2" /> Beginner
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="proficiency" className="mr-2" /> Intermediate
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="proficiency" className="mr-2" /> Advance
                  </label>
                </div>
              </div>
            </div>
  
            {/* Right Column */}
            <div className="space-y-4">
              <div className="flex flex-col">
                <label className="mb-2 font-semibold">Have You Ever Appeared in any coding contest?</label>
                <div className="flex flex-col space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="coding_contest" className="mr-2" /> Yes
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="coding_contest" className="mr-2" defaultChecked /> No
                  </label>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="mb-2 font-semibold">Discuss what drives your passion for coding and outline your aspirations in the field.</label>
                <textarea className="border p-2 rounded" rows={3}></textarea>
              </div>
              <div className="flex flex-col">
                <label className="mb-2 font-semibold">What are some of the challenges you face while coding?</label>
                <textarea className="border p-2 rounded" rows={3}></textarea>
              </div>
              <div className="flex flex-col">
                <label className="mb-2 font-semibold">Please list the Data Structures you have a strong understanding of.</label>
                <textarea className="border p-2 rounded" rows={3}></textarea>
              </div>
              <div className="flex flex-col">
                <button type="submit" className="bg-green-500 text-white p-2 rounded mt-8">Submit Form</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  export default Form;