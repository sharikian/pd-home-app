"use client"
import React, { useCallback, useState } from "react";
import { FolderUpload, Plus } from "@/public/icons";
import { Button } from "./ui/Button";
import Image from "next/image";

interface FilePickerProps {
	buttonName:string;
	title: string;
	onFileSelected: (files: FileList) => void;
}

export const FilePicker = ({ buttonName, title, onFileSelected }: FilePickerProps) => {
	const [isDragging, setIsDragging] = useState(false);

	const handleFileInput = (files: FileList | null) => {
		if (files && files.length > 0) {
			onFileSelected(files);
		}
	};

	const handleDragOver = useCallback((e: React.DragEvent) => {
		e.preventDefault();
		setIsDragging(true);
	}, []);

	const handleDragLeave = useCallback((e: React.DragEvent) => {
		e.preventDefault();
		setIsDragging(false);
	}, []);

	const handleDrop = useCallback(
		(e: React.DragEvent) => {
			e.preventDefault();
			setIsDragging(false);
			const files = e.dataTransfer.files;
			if (files) {
				onFileSelected(files);
			}
		},
		[onFileSelected],
	);

	return (
		<div className="flex flex-row-reverse gap-12 items-center">
			{/* Title */}
			<div className="max-w-70 block px-4 text-right  text-lg font-medium text-black">
				{title}
			</div>
			<div
				className="relative p-6"
				style={{
					borderRadius: "0.3125rem",
					border: "0.2rem solid #1A604E",
				}}
				onDragOver={handleDragOver}
				onDragLeave={handleDragLeave}
				onDrop={handleDrop}
			>
				{/* Hidden file input */}
				<input
					type="file"
					className="hidden"
					id="fileInput"
					onChange={(e) => handleFileInput(e.target.files)}
					multiple
					accept="image/*"
				/>

				{/* Main container */}
				<div className="relative inline-flex h-[258px] w-[621px] flex-col items-center justify-center gap-4">
					{/* Upload icon */}
					<Image
						className="mt-4 h-[70px] w-[70px]"
						alt="Upload folder"
						src={FolderUpload}
					/>

					{/* Drop text */}
					<p className="px-8 text-center  text-lg font-medium text-[#88997d]">
						برای بارگذاری عکس، فایل خود را بکشید و اینجا رها کنید
					</p>

					{/* Custom file selection button */}
					<label
						htmlFor="fileInput"
						className="bg-light-green mt-4 cursor-pointer rounded-lg px-6 py-2 shadow-[2px_-1px_66.3px_18px_#ffffff]"
					>
						<Button text={buttonName} icon={Plus} />
					</label>

					{/* Drag overlay */}
					{isDragging && (
						<div
							className="bg-light-green bg-opacity-20 absolute inset-0 flex items-center justify-center"
							style={{
								borderRadius: "0.3125rem",
								border: "1.5px solid #1A604E",
							}}
						>
							<p className="text-dark-green text-xl font-bold">
								فایل را اینجا رها کنید
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
