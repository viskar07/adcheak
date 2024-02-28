import {InstagramService} from "@xncn/instagramdownloaderpro";




export const GET = async(request:Request) => {

    const {searchParams} = new URL (request.url)
    const url = searchParams.get('url') as string
    const instagram = new InstagramService();
    const download = await instagram.downloadService.Download(url);
    

    return Response.json(download)
}