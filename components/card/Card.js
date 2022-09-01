import Image from 'next/image';
import Link from 'next/link';
import styles from './Card.module.css';

const Card = ({ tec }) => {
  const { id, name, owner, image, description, createdAt } = tec;
  return (
    <div className={styles.container}>
      <Link
        className="block overflow-hidden border border-gray-100 rounded-lg shadow-sm"
        href={`/tecnologias/${tec.id}`}
      >
        <a>
          <div className=" flex flex-col justify-center items-center">
            <Image
              className="object-cover w-full h-56"
              src={image}
              alt={name}
              width={400}
              height={400}
              priority
            />
          </div>

          <div className="p-6">
            <h5 className="text-xl font-bold">{name}</h5>

            <p className="mt-2 text-sm text-gray-500">{owner}</p>
            <p className="mt-2 text-sm text-gray-500">
              {description.substring(0, 50) + '...'}
            </p>
            <h5 className="text">{createdAt.substring(0, 10)}</h5>

            <div className="inline-block pb-1 mt-4 font-medium text-blue-600 border-b border-blue-500 ">
              Conocer más...
              <span aria-hidden="true">&rarr;</span>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Card;
