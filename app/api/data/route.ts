import { Url } from "next/dist/shared/lib/router/router"
import { NextResponse } from "next/server"
import ytdl, { videoFormat, videoInfo } from "ytdl-core"



export const GET = async(request:Request) => {

    const {searchParams} = new URL (request.url)
    const url = searchParams.get('url') as string
    const type = searchParams.get('type') as string 
    const info = await ytdl.getInfo(url)
    
    // const format = ytdl.chooseFormat(videoFormats, {quality :'highestaudio'})
    // console.log(format);
    
    
    
    // const fileName = `${info.videoDetails.title}.${format.container}`
    // const resposeHeaders = {'Content-Disposition': `attachment; filename="${fileName}"`};
    // return NextResponse.json({format, resposeHeaders, fileName})

    return Response.json(info)
}