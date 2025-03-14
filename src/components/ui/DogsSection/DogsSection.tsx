"use client"

import Image from "next/image";
import { Card, CardTitle } from "@/components/ui/card";
import { Dog } from "@/types/dog";
import {usePersistentState} from "@/hooks/usePersistentState";
import {useEffect, useState} from "react";
import {clsx} from "clsx";

type DogsSectionProps = {
	dogs: Dog[];
}

export const DogsSection: React.FC<DogsSectionProps> = ({ dogs }) => {
	const [hugsCount, setHugsCount] = usePersistentState<number>("hugsCount", 0);
	const [isHugsCountNew, setIsHugsCountNew] = useState<boolean>(false)

	useEffect(() => {
		setIsHugsCountNew(true);

		const timeout = setTimeout(() => {
			setIsHugsCountNew(false);
		}, 300)

		return () => clearTimeout(timeout);
	}, [hugsCount]);

	const increaseHugsCount = () => {
		setHugsCount((prevHugsCount: number) => prevHugsCount + 1);
	}

	return (
		<>
			<div className={"flex justify-center items-center min-h-14"}>
				<span className={"text-2xl"}>
					Dog hugs: <span className={clsx('duration-100 inline-block', isHugsCountNew && 'scale-125 text-green-300')}>{ hugsCount }</span>
				</span>
			</div>
			<div className="grid auto-rows-min gap-4 md:grid-cols-3">
				{dogs.map((dog, i) => (
						<Card
							key={i}
							onClick={increaseHugsCount}
							className={"flex flex-col justify-center items-center"}
						>
							<Image src={dog.image_url} alt={`A dog named ${dog.name}`} width={400} height={400} />
							<CardTitle className={"capitalize my-2"}>{dog.name}</CardTitle>
						</Card>
				))}
			</div>
		</>
	)
}