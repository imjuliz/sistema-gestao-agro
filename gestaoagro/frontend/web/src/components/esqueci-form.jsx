import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function EsqueciForm({ className, ...props }) {
    return (
        <form className={cn("flex flex-col gap-6", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold text-white">Esqueci a senha</h1>
                <p className="text-muted-foreground text-sm text-balance">
                    Não se preocupe, acontece com todos nós! Insira seu e-mail abaixo para recuperar sua senha.
                </p>
            </div>
            <div className="grid gap-6">
                <div className="grid gap-3">
                    <Label htmlFor="email" className={'text-white'}>Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" className={'text-white'} required />
                </div><a href="/verificacao">
                <Button type="submit" className="w-full bg-white text-black">
                    Enviar código</Button></a>
            </div>
            <div className="text-center text-sm text-white">
                <a href="/login" className="underline underline-offset-4 text-white">
                    Voltar
                </a>
            </div>
        </form>
    );
}
