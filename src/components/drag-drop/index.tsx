'use client'

import React, { useState, useCallback } from 'react'
import { Input } from '../ui/input'
import Image from 'next/image'
import { useDropzone } from 'react-dropzone'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Avatar, AvatarImage } from '../ui/avatar'

const DragDrop: React.FC = () => {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const reader = new FileReader()
    reader.onload = () => {
      setPreview(reader.result)
    }
    reader.readAsDataURL(acceptedFiles[0])
    setFile(acceptedFiles[0])
  }, [])

  const onCanel = () => {
    setFile(null)
    setPreview(null)
  }

  const toogleModal = () => {
    setModalOpen(!modalOpen)
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  // const handleOnSubmit = (e: React.SyntheticEvent) => {
  //   e.preventDefault()
  //   if (file) {
  //     const formData = new FormData()
  //     formData.append('file', file)
  //     fetch('/api/upload', {
  //       method: 'POST',
  //       body: formData,
  //     })
  //   }
  // }

  if (file) {
    return (
      <>
        {!modalOpen && (
          <div className="flex flex-col gap-y-4">
            {preview && <Image src={preview as string} alt="preview" width={100} height={100} />}
            <div className="flex w-full justify-between">
              <Button variant="outline" onClick={onCanel}>
                Remove
              </Button>
              <Button onClick={toogleModal} type="submit">
                Advance
              </Button>
            </div>
          </div>
        )}
        {modalOpen && (
          <Card>
            <CardHeader>
              <CardTitle>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
                <span>Arthur</span>
              </CardTitle>
              <CardDescription>Create a new post</CardDescription>
            </CardHeader>
            <CardContent>
              <forn className="flex flex-col gap-y-3">
                <Input className="bg-transparent" type="text" placeholder="Title" />
                <Input className="bg-transparent" type="text" placeholder="Description" />
                <div className="w-full flex justify-between">
                  <Button variant="outline" onClick={toogleModal}>
                    Close
                  </Button>
                  <Button type="submit">Submit</Button>
                </div>
              </forn>
            </CardContent>
          </Card>
        )}
      </>
    )
  }

  return (
    <div {...getRootProps()} className="w-full flex flex-col justify-center items-center h-96">
      <Input {...getInputProps()} type="file" accept="image/png, image/jpeg" />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <Button>Drag drop some files here, or click to select files</Button>
      )}
      {preview && <Image src={preview as string} alt="preview" width={100} height={100} className="rounded-lg" />}
    </div>
  )
}

export { DragDrop }
