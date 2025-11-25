"use client";

import { Controller, useForm } from "react-hook-form";
import { Field, FieldError, FieldGroup, FieldLabel } from "./shadcnui/field";
import { Textarea } from "./shadcnui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { noteFormFieldSchema } from "@/lib/zodSchema";
import { Button } from "./shadcnui/button";
import { NoteFormFieldType } from "@/lib/types";
import { FilePlus, Loader } from "lucide-react";

const NoteForm = () => {
	// Initialize useForm hook
	const {
		handleSubmit,
		formState: { isSubmitting, isValid },
		control,
		reset,
	} = useForm({
		resolver: zodResolver(noteFormFieldSchema),
		defaultValues: {
			noteTitle: "",
			noteBody: "",
		},
		mode: "all",
	});

	// Form handler function
	const noteFormHandlerFunc = async (noteData: NoteFormFieldType) => {
		try {
			console.log(noteData);

			reset();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<form
				id="form-rhf-demo"
				onSubmit={handleSubmit(noteFormHandlerFunc)}
				className="grid grid-cols-1 gap-4"
				noValidate>
				{/* Title field  */}
				<FieldGroup>
					<Controller
						name="noteTitle"
						control={control}
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor="note-title">Title</FieldLabel>
								<Textarea
									{...field}
									id="note-title"
									aria-invalid={fieldState.invalid}
									placeholder="Enter the title here"
									autoComplete="off"
								/>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>
				</FieldGroup>

				{/* Note body field  */}
				<FieldGroup>
					<Controller
						name="noteBody"
						control={control}
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor="note-body">Note</FieldLabel>
								<Textarea
									{...field}
									id="note-body"
									aria-invalid={fieldState.invalid}
									placeholder="Enter your note here..."
									autoComplete="off"
									className="min-h-[200px]"
								/>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>
				</FieldGroup>

				{/* Submit button  */}

				<Button
					size={"lg"}
					type="submit"
					disabled={!isValid || isSubmitting}
					className="flex cursor-pointer items-center">
					{isSubmitting ? (
						<>
							<Loader className="animate-spin" /> <span>Submitting...</span>
						</>
					) : (
						<>
							<FilePlus />
							<span>Add Note</span>
						</>
					)}
				</Button>
			</form>
		</>
	);
};

export default NoteForm;
