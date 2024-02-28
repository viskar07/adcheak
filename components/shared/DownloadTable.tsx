import { Button } from "../ui/button"
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogTrigger } from "../ui/alert-dialog"
import Image from "next/image"
import { downloadVideo } from "@/lib/utils"


export function DownloadTable({ url, thumbnail }: { url: string, thumbnail: string }) {
  
  return (
    <div className="flex flex-col gap-3 items-center">
      <div className="flex flex-col md:flex-row gap-2 md:gap-10">
        <Image src={thumbnail} width={140} height={40} alt="thumbnail" className="w-auto h-auto border-4 border-white-800 " />
      </div>
      <div className="flex flex-col sm:flex-row  w-full gap-8 justify-center mt-4">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 w-full  button-hover">Watch Reel</Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="flex flex-col items-center">
            <video controls className="border-2 border-slate-400">
              <source src={url} type="video/mp4" />
            </video>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogContent>

        </AlertDialog>

        <Button onClick={()=>  downloadVideo(url,"instadl")} className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 w-full  button-hover">Download</Button>
      </div>

    </div>
  )
}
