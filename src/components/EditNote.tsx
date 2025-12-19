"use client";
import { noteFormFieldSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpFromLine, Loader } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "./shadcnui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "./shadcnui/field";
import { Textarea } from "./shadcnui/textarea";
import { customDelay } from "@/hooks/customDelay";
import updateNote from "@/hooks/serverActions/updateNote";
import { Note, NoteFormFieldType } from "@/lib/types";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

// Define the editNote prop type
type EditNotePropsType = {
	noteData: Note;
};

const EditNote = ({
	noteData: { noteBody, noteTitle, id },
}: EditNotePropsType) => {
	// Initialize  the useRouter hook
	const { push } = useRouter();

	// Initialize useForm hook
	const {
		handleSubmit,
		formState: { isSubmitting, isValid, isDirty },
		control,
	} = useForm({
		resolver: zodResolver(noteFormFieldSchema),
		defaultValues: {
			noteTitle: noteTitle,
			noteBody: noteBody,
		},
		mode: "all",
	});

	// Update note handler function
	const updateNoteHandlerFunc = async (noteData: NoteFormFieldType) => {
		// Delaying the note update
		await customDelay(1500);

		// Update note data in the database
		const { success, message } = await updateNote(id, noteData);

		//  Error toast message
		if (!success) {
			toast.error(message);
		}

		//  Success toast message
		if (success) {
			toast.success(message);

			// redirect to home page
			push("/");
		}
	};

	return (
		<>
			<form
				id="edit-note-form"
				onSubmit={handleSubmit(updateNoteHandlerFunc)}
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
									className="resize-none"
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
									className="h-60 resize-none"
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
					disabled={!isDirty || !isValid || isSubmitting}
					className="flex cursor-pointer items-center">
					{isSubmitting ? (
						<>
							<Loader className="animate-spin" /> <span>Updatting...</span>
						</>
					) : (
						<>
							<ArrowUpFromLine />
							<span>Update</span>
						</>
					)}
				</Button>
			</form>
		</>
	);
};

export default EditNote;
