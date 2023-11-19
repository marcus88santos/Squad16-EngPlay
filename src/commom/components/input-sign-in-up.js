import Image from "next/image";

export default function InputSignInUp(props) {
  const size = props.size
  const type = props.type
  const placeholder = props.placeholder

  return (
    <div className="bg-white flex flex-row items-center rounded-2xl p-3 m-2 text-cinza text-lg font-semibold border-4 w-96">
      <Image
        width={size}
        height={size}
        src={"/input_icon_" + type + ".png"}
        alt={"input icon " + type}
        className="mr-4"
      />
      <input className="w-full px-1 outline-gray-200 rounded" type={type === 'senha' ? 'password' : 'text'} placeholder={placeholder}></input>
    </div>
  );
}
