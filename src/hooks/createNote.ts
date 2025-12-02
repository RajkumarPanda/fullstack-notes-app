"use server"


import prisma from "@/lib/prismaClient";
import { NoteFormFieldType } from "@/lib/types";

const createNote = async(note:NoteFormFieldType) => {

    const {noteBody,noteTitle}=note

    await prisma.note.create({
        data:{
            noteTitle:noteTitle,noteBody:noteBody

        }
    })
    
}

export default createNote;