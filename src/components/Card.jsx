import Button from "./Button";

const Card = ({image, text, to}) => (
  <>
    <div className='flex flex-col items-center'>
        <article className="lg:w-64 lg:h-64 w-56 h-56 bg-[#dde1e2] flex items-center justify-center rounded-lg">
            <img src={image} className='w-[80%] drop-shadow-md hover:scale-110 cursor-pointer transition-all duration-300'></img>
        </article>
        <Button text={text} href={to} target='_blank' disabled={true}/>
    </div>
  </>
);

export default Card;