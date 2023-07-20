import Image from "next/image"
import { SkillsCardProps } from "@/models/props/SkillsCardProps"
const SkillsCard = ({src, alt, title}: SkillsCardProps) => {
    return (
        <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={src}
                            alt={alt}
                            width='56'
                            height="56"
                    />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>{title}</h3>
                </div>
            </div>
        </div>
    );
};

export default SkillsCard;