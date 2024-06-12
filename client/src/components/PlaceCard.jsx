function PlaceCard(props) {
  return (
    <div className="flex flex-row justify-center p-4 bg-stone-50">
      <div className=" p-4 w-[350px] h-[auto] bg">
        <img
          src={props.photo}
          alt={props.title}
          className="rounded-2xl w-full h-[200px]"
        />
      </div>
      <div className="-300 p-4 justify-center w-1/2 h-auto  ">
        <h1 className="text-xl font-medium">{props.title}</h1>
        <div className="text-sm text-gray-500">{props.description}</div>
        <a
          href={props.url}
          target="_blank"
          className="text-sm underline text-blue-400"
        >
          อ่านต่อ
        </a>
        <p className="text-sm text-gray-500">
          หมวด <span className="underline ">{props.tags.join(",")}</span>
        </p>
      </div>
    </div>
  );
}

export default PlaceCard;
