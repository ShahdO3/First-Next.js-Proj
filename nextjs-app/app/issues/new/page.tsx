'use client'

import { Button, Callout, TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {useForm, Controller} from 'react-hook-form'
import axios from 'axios'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { IoMdInformationCircleOutline } from 'react-icons/io';


interface IssueForm{
  title: String;
  description: String;
}


const NewIssuePage = () => {
  const router = useRouter();
  const {register, control, handleSubmit} = useForm<IssueForm>();
  const [error, setError] = useState('');


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
            await axios.post('/api/issues', data);
            router.push('/issues');
          } catch (error) {
            setError('An unexpected error occured')
          }
      })}>
          <TextField.Root placeholder='Title' {...register('title')}>
          </TextField.Root>

          <Controller
            name='description'
            control={control}
            render={({field}) => <SimpleMDE placeholder="Description…" {...field}/>}
          />
          
          <Button>Submit New Issue</Button>
      </form>
    </div>
  )
}

export default NewIssuePage