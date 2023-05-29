import Image from "next/image"
import { SkillsCardProps } from "@/models/SkillsCardProps"
const SkillsCard = ({src, alt, title}: SkillsCardProps) => {
    return (
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='gird grid-cols-2 gap-4 justify-center items-center'>
                <div className='flex flex-rows mr-10'>
                    <div className='m-auto'>
                        <Image src={src}
                                alt={alt}
                                width='64'
                                height="64"
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>{title}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsCard;