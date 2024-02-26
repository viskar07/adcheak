import { Terminal } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertDemo() {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        Please cheak your URL ..
      </AlertDescription>
    </Alert>
  )
}
