import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";
import Image from "next/image";
import { BsCalendarFill, BsFolderFill, BsPersonFill } from "react-icons/bs";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date, thumbnail, category } = post;
  const formattedDate = getFormattedDate(date);

  console.log(post);

  return (
    <li className="py-10">
      <Link className="text-4xl py-10" href={`/posts/${id}`}>
        {title}
      </Link>
      <Image
        src={thumbnail}
        alt="Laptop"
        className="w-5/6 rounded-lg"
        width={500}
        height={500}
      />
      <p className="text-lg py-10 pr-16">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum iste id
        sapiente totam ab, autem aliquid maxime perspiciatis quo est, eligendi
        recusandae laudantium? Minus sunt ut illo eligendi? Tempore sunt fugiat
        sapiente. Esse asperiores nostrum dolore excepturi. Distinctio nesciunt
        assumenda a quos obcaecati vel placeat?
      </p>
      <div className="flex gap-x-12">
        <div className="flex items-center text-lg">
          <BsPersonFill />
          <p className="px-2">Ryan Spencer</p>
        </div>
        <div className="flex items-center text-lg">
          <BsCalendarFill />
          <p className="px-2">{formattedDate}</p>
        </div>
        <div className="flex items-center text-lg">
          <BsFolderFill />
          <p className="px-2">{category}</p>
        </div>
      </div>
    </li>
  );
}
