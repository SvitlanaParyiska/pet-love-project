import {
  addressLength,
  workDaysIs,
  workTime,
} from "../../helpers/friendsHelpers";
import { FriendItem } from "../../types/InterfaceData";

interface FriendsProps {
  friend: FriendItem;
}

function FriendsItem({ friend }: FriendsProps) {
  return (
    <li className="py-[40px] px-[20px] flex flex-row gap-[14px] mobile:w-[335px]  relative tablet:w-[342px] desktop:w-[371px] ">
      <div className="absolute top-[8px] right-[8px] p-[8px] bg-light rounded-30">
        <p className="text-12 text-accent">
          {workDaysIs(friend.workDays)
            ? `${workTime(friend.workDays)?.from} - ${
                workTime(friend.workDays)?.to
              }`
            : "Day and night"}
        </p>
      </div>
      <img
        src={friend.imageUrl}
        alt="friend's logo"
        className="w-[80px] h-[80px] rounded-full overflow-hidden"
      />
      <div>
        <h3 className="font-bold text-16 leading-tight tracking-[-0.04em]">
          {friend.title}
        </h3>
        <p className="text-14 text-darkGrey leading-[1.29] tracking-[-0.02em] mt-[14px]">
          Email:
          <span className="text-midnight">
            {friend.email ? (
              <a href={`mailto:${friend.email}`}>{friend.email}</a>
            ) : (
              "address only"
            )}
          </span>
        </p>
        <p className="text-14 text-darkGrey leading-[1.29] tracking-[-0.02em] mt-[8px]">
          Address:{" "}
          <span className="text-midnight truncate ...">
            {friend.address ? (
              <a
                href={friend.address}
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                {addressLength(friend.address)}
              </a>
            ) : (
              "website only"
            )}
          </span>
        </p>
        <p className="text-14 text-darkGrey leading-[1.29] tracking-[-0.02em] mt-[8px]">
          Phone:{" "}
          <span className="text-midnight">
            {friend.phone ? (
              <a href={`tel:${friend.phone}`}>{friend.phone}</a>
            ) : (
              "email only"
            )}
          </span>
        </p>
      </div>
    </li>
  );
}

export default FriendsItem;
