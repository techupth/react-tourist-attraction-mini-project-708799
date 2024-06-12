import { IoIosCopy } from "react-icons/io";

function PlaceCard(props) {
  return (
    <div className="flex flex-row justify-center p-4 bg-stone-50 w-full">
      <div className=" p-4 w-[350px] h-[auto] bg">
        <img
          src={props.photo}
          alt={props.title}
          className="rounded-2xl w-full h-[200px]"
        />
      </div>
      <div className="-300 p-4 justify-center w-1/2 h-auto relative  ">
        <h1 className="text-xl font-medium">{props.title}</h1>
        <div className="text-sm text-gray-500">{props.description}</div>
        <a
          href={props.url}
          target="_blank"
          className="text-sm underline text-blue-400"
        >
          อ่านต่อ
        </a>
        <p className="text-sm text-gray-500 ">
          หมวด <span className="underline px-2">{`${props.tags}`}</span>
        </p>
        <div className="flex gap-4 pt-2">
          {props.additionalPhotos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`${props.title}`}
              className="rounded-2xl w-[80px] h-[80px]"
            />
          ))}
        </div>
        <div className="absolute right-20 bottom-9 p-4 rounded-full hover:bg-gray-100 hover:transition-all cursor-pointer">
          <IoIosCopy
            size={60}
            color="lightblue"
            onClick={() => {
              navigator.clipboard.writeText(props.url);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default PlaceCard;
