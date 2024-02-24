import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import { calculateFileSize } from "@/lib/utils"
import { Button } from "../ui/button"
import { videoFormat } from "ytdl-core"
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogTrigger } from "../ui/alert-dialog"
import Image from "next/image"
import { details } from "@/types"


export function DownloadTable({ data, type, details }: { data: videoFormat[], type: string, details: details }) {

  return (
    <div className="flex flex-col gap-3 items-center">
      <div className="flex flex-col md:flex-row gap-2 md:gap-10">
        <Image src={details?.image} width={140} height={40} alt="thumbnail" className="w-auto h-auto border-2 border-white-800" />
        <p className="text-md max-w-[500px]">{details?.title}</p>
      </div>
      <Table className="text-[10px] sm:text-sm w-full">
        <TableHeader>
          <TableRow>
            <TableHead className={`${type === 'mp3' && 'hidden'} text-center `} >Quality</TableHead>
            <TableHead className="text-center">Format</TableHead>
            <TableHead className="text-center">Size</TableHead>
            <TableHead className="text-center" >Download</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((items) => (
            <TableRow key={items.itag}>
              <TableCell className={`${type === 'mp3' && 'hidden'} font-medium text-center`}>{items.qualityLabel}</TableCell>
              <TableCell className="font-medium text-center">{items.container}</TableCell>
              <TableCell className="text-center">{calculateFileSize(items.bitrate, items.approxDurationMs)}</TableCell>
              <TableCell>
                <AlertDialog>
                  <AlertDialogTrigger className="w-full flex justify-center"> <Button variant="outline" size="icon">
                    <Image src="/icons/download.png" width={30} height={30} alt="download" />
                  </Button></AlertDialogTrigger>
                  <AlertDialogContent className="flex flex-col justify-center items-center">
                    {type === 'mp3' ? (
                      <audio controls>
                        <source src={items.url} type="audio/mpeg" />
                      </audio>

                    ) : (
                      <video controls className="w-50 ">
                        <source src={items.url} type="video/mp4" />
                      </video>
                    )}
                    <AlertDialogFooter>
                      <AlertDialogCancel>Back</AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </div>
  )
}
