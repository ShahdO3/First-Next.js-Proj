'use client'

import { Box, Button, Callout, Text, TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {useForm, Controller} from 'react-hook-form'
import axios from 'axios'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import {zodResolver} from '@hookform/resolvers/zod'
import { createIssueSchema } from '@/app/validationSchemas';
import { z } from "zod";
import ErrorMessage from '@/app/components/ErrorMessage';
import Spinner from '@/app/components/Spinner';


type IssueForm = z.infer<typeof createIssueSchema>;


const NewIssuePage = () => {
  const router = useRouter();
  const {register, 
    control, 
    handleSubmit, 
    formState:{ errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });
  const [error, setError] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);

  return (
    <div className='max-w-xl '>
      {error && (
      <Callout.Root color="red" variant="soft" size='1' className='mb-5'>
      <Callout.Icon>
        <IoMdInformationCircleOutline />
      </Callout.Icon>
        <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form 
        className='space-y-3' 
        onSubmit={handleSubmit(async (data) => {
          try {  
            setSubmitting(true);
            await axios.post('/api/issues', data);
            router.push('/issues');
          } catch (error) {
            setSubmitting(false);
            setError('An unexpected error occured')
          }
      })}>
          <input type="text" placeholder='Title' {...register('title')} className='input input-info bg-neutral shadow-md w-full'/>

          <ErrorMessage> {errors.title?.message}</ErrorMessage>

          <Controller
            name='description'
            control={control}
            render={({field}) => <SimpleMDE placeholder="Description…" {...field}/>}
          />
          <ErrorMessage> {errors.description?.message}</ErrorMessage>

          <Button disabled = {isSubmitting} >
            Submit New Issue { isSubmitting && <Spinner/>}
          </Button>
      </form>
    </div>
  )
}

export default NewIssuePage