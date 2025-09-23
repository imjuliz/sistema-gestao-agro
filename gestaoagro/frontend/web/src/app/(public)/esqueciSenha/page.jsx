import { GalleryVerticalEnd } from "lucide-react"
import { EsqueciForm } from "@/components/esqueci-form";

export default function EsqueciSenha() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2 bg-black">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="h-10 w-60 text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <img src="/img/logoRuralTech.svg" className='w-100 h-100 dark:brightness-[0.2]' />
            </div>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <div className="w-full max-w-xs">
              <EsqueciForm />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/placeholder.svg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale" />
      </div>
    </div>
  );
}
