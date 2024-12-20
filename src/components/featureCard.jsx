function FeatureCard({ feature, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-8 px-6">
      {isEven ? (
        <>
          <div className="md:col-span-1 md:block hidden col-span-2 px-4">
            <img
              src={feature?.imgSrc}
              className="w-full mr-3"
              alt="feature img"
            />
          </div>
          <div className="md:col-span-1 md:flex hidden col-span-2 p-4 pl-8 items-center">
            <div>
              <h3 className="font-bold text-lg mb-2">{feature?.heading}</h3>
              <p>{feature?.description}</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="md:col-span-1 md:flex hidden col-span-2 p-4 pr-8 items-center">
            <div>
              <h3 className="font-bold text-lg mb-2">{feature?.heading}</h3>
              <p>{feature?.description}</p>
            </div>
          </div>
          <div className="md:col-span-1 md:block hidden col-span-2 px-4">
            <img
              src={feature?.imgSrc}
              className="w-full ml-3"
              alt="feature img"
            />
          </div>
        </>
      )}

      <div className="col-span-2 md:hidden block px-4">
        <img src={feature?.imgSrc} className="w-full mb-3" alt="feature img" />
      </div>
      <div className="col-span-2 md:hidden block p-4 flex items-center">
        <div>
          <h3 className="font-bold text-lg mb-2">{feature?.heading}</h3>
          <p>{feature?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
