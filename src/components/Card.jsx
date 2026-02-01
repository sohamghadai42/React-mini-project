import "../index.css"

const Card = ({ title, role, email, img, idx, removeUser }) => {
    return <div className="card h-[370px] w-[350px] bg-white rounded-xl flex flex-col items-center gap-4.5">
        <img src={img} alt="" className="h-20 w-20 rounded-full mt-12 object-center object-cover" />
        <h1 className="text-3xl font-bold">{title}</h1>
        <h2 className="text-xl font-bold text-blue-400">{role}</h2>
        <h2 className="text-xl font-medium">{email}</h2>
        <button onClick={() => removeUser(idx)} className="px-5 py-3 bg-red-600 text-xl cursor-pointer text-white font-semibold rounded-xl">Remove</button>
    </div>

}
export default Card;