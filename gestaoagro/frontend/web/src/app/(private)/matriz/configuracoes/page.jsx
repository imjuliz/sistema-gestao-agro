// Página de Configurações: Permitir ajustes do sistema e personalização.
// layout: Aba de preferências (idioma, moeda, unidades de medida). Aba de integrações (IoT, contabilidade).
// Funcionalidades: Alterar dados da empresa (nome, logotipo). Configurar integrações com hardware (ex.: potenciômetro IoT).
"use client";

import { useState, useRef } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
    User,
    CreditCard,
    Image as ImageIcon,
    Bell,
    Monitor,
} from "lucide-react";

export default function SettingsPage() {
    const [active, setActive] = useState("Perfil"); // Perfil | Empresa | Billing | Aparencia | Notifications | Display
    const [username, setUsername] = useState("agrotech_admin");
    const [telefone, setTelefone] = useState("");
    const [emailSelect, setEmailSelect] = useState(""); // example selected email
    const [nome, setNome] = useState("");
    const [urls, setUrls] = useState(["https://agrotech.com.br"]);
    const [avatarUrl, setAvatarUrl] = useState("");
    const fileRef = useRef(null);

    // Aparencia
    const [font, setFont] = useState("");
    const [theme, setTheme] = useState("dark"); // light | dark

    // Notifications
    const [emailNotifications, setEmailNotifications] = useState(true);

    function handleAvatarChange(e) {
        const f = e.target.files?.[0];
        if (!f) return;
        const url = URL.createObjectURL(f);
        setAvatarUrl(url);
        // In real app: upload to server and persist URL
    }

    function addUrl() {
        setUrls((s) => [...s, ""]);
    }

    function updateUrl(index, value) {
        setUrls((s) => s.map((u, i) => (i === index ? value : u)));
    }

    function removeUrl(index) {
        setUrls((s) => s.filter((_, i) => i !== index));
    }

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-2">Configurações</h1>
            <p className="text-muted-foreground mb-6">
                Manage your Empresa settings and set preferences.
            </p>

            <div className="flex gap-6">
                {/* Sidebar */}
                <aside className="w-72 h-fit rounded-lg border border-border bg-background p-4">
                    <nav className="flex flex-col gap-1">
                        {[
                            { key: "Perfil", label: "Perfil", icon: User },
                            { key: "Empresa", label: "Empresa", icon: CreditCard },
                            { key: "Aparencia", label: "Aparencia", icon: ImageIcon },
                            { key: "Notifications", label: "Notifications", icon: Bell }
                        ].map((it) => {
                            const Icon = it.icon;
                            const selected = active === it.key;
                            return (
                                <button
                                    key={it.key}
                                    onClick={() => setActive(it.key)}
                                    className={`flex w-full items-center gap-3 rounded-md px-3 py-3 text-sm ${selected
                                        ? "bg-accent text-accent-foreground"
                                        : "hover:bg-muted/50 text-foreground"
                                        }`}
                                >
                                    <Icon className="h-4 w-4" />
                                    <span>{it.label}</span>
                                </button>
                            );
                        })}
                    </nav>
                </aside>

                {/* Content */}
                <section className="flex-1">
                    <div className="rounded-lg border border-border bg-background p-6">
                        {/* ---------- Perfil ---------- */}
                        {active === "Perfil" && (
                            <>
                                <h2 className="text-lg font-semibold mb-4">Perfil</h2>

                                <div className="flex gap-6">


                                    <div className="flex-1 gap-6">

                                        <div className="grid gap-4">

                                            <div className="w-48">
                                                <div className="flex items-center gap-4">
                                                    <Avatar className="h-20 w-20">
                                                        {avatarUrl ? (
                                                            <AvatarImage src={avatarUrl} alt="Avatar" />
                                                        ) : (
                                                            <AvatarFallback>
                                                                {username?.[0]?.toUpperCase() || "A"}
                                                            </AvatarFallback>
                                                        )}
                                                    </Avatar>

                                                    <div>
                                                        <input
                                                            ref={fileRef}
                                                            type="file"
                                                            accept="image/*"
                                                            className="hidden"
                                                            onChange={handleAvatarChange}
                                                        />
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            onClick={() => fileRef.current?.click()}
                                                        >
                                                            Upload image
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Label className={"pb-3"} htmlFor="username">Username</Label>
                                                <Input
                                                    id="username"
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                />
                                                <p className="text-sm text-muted-foreground mt-1">
                                                    This is your public display name. You can change it from time to time.
                                                </p>
                                            </div>

                                            <div>
                                                <Label className={"pb-3"} htmlFor="nome">Nome completo</Label>
                                                <Input
                                                    id="nome"
                                                    value={nome}
                                                    onChange={(e) => setNome(e.target.value)}
                                                />
                                                <p className="text-sm text-muted-foreground mt-1">
                                                    Digite seu nome completo
                                                </p>
                                            </div>

                                            <div>
                                                <Label className={"pb-3"} htmlFor="emailSelect">Email</Label>
                                                <Select
                                                    onValueChange={(v) => setEmailSelect(v)}
                                                    value={emailSelect}
                                                >
                                                    <SelectTrigger id="emailSelect" className="w-full">
                                                        <SelectValue placeholder="Select an email" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="admin@agrotech.com">
                                                            admin@agrotech.com
                                                        </SelectItem>
                                                        <SelectItem value="contact@agrotech.com">
                                                            contact@agrotech.com
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <p className="text-sm text-muted-foreground mt-1">
                                                    Manage verified email addresses in your Empresa
                                                    settings.
                                                </p>
                                            </div>

                                            <div>
                                                <Label className={"pb-3"} htmlFor="telefone">Telefone</Label>
                                                <Input
                                                    id="telefone"
                                                    value={telefone}
                                                    onChange={(e) => setTelefone(e.target.value)}
                                                />
                                                <p className="text-sm text-muted-foreground mt-1">
                                                    This is your public display name. You can change it from time to time.
                                                </p>
                                            </div>

                                            <div>
                                                <Label className={"pb-3"}>URLs</Label>
                                                <p className="text-sm text-muted-foreground mb-2">
                                                    Add links to your website, blog, or social Perfils.
                                                </p>

                                                <div className="flex flex-col gap-2">
                                                    {urls.map((u, i) => (
                                                        <div key={i} className="flex items-center gap-2">
                                                            <Input
                                                                value={u}
                                                                onChange={(e) => updateUrl(i, e.target.value)}
                                                                className="flex-1"
                                                            />
                                                            <Button
                                                                variant="outline"
                                                                size="sm"
                                                                onClick={() => removeUrl(i)}
                                                            >
                                                                Remove
                                                            </Button>
                                                        </div>
                                                    ))}
                                                    <div>
                                                        <Button size="sm" onClick={addUrl}>
                                                            Add URL
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pt-3">
                                                <Button>Update Perfil</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* ---------- Empresa ---------- */}
                        {active === "Empresa" && (
                            <>
                                <h2 className="text-lg font-semibold mb-4">Empresa</h2>
                                <div className="grid gap-4">
                                    <div>
                                        <Label>Empresa slug</Label>
                                        <div className="flex items-center gap-2">
                                            <span className="inline-flex h-10 items-center rounded-l-md border border-r-0 border-input bg-muted px-3 text-sm text-muted-foreground">
                                                agrotech.com.br/
                                            </span>
                                            <Input defaultValue="matriz" className="rounded-l-none" />
                                            <Button size="sm">Save</Button>
                                        </div>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Company URL used for internal references.
                                        </p>
                                    </div>

                                    <Separator />

                                    <div>
                                        <Label>Two-factor authentication</Label>
                                        <p className="text-sm text-muted-foreground mb-2">
                                            Improve Empresa security with 2FA.
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <Switch id="2fa" defaultChecked />
                                            <Label htmlFor="2fa">Enabled</Label>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* ---------- BILLING ---------- */}
                        {active === "Billing" && (
                            <>
                                <h2 className="text-lg font-semibold mb-4">Billing</h2>
                                <div className="grid gap-4">
                                    <div>
                                        <Label>Plan</Label>
                                        <div className="flex items-center gap-4">
                                            <div className="rounded-md border p-4">
                                                <div className="font-semibold">Starter</div>
                                                <div className="text-sm text-muted-foreground">Free</div>
                                            </div>
                                            <div className="rounded-md border p-4 bg-muted/50">
                                                <div className="font-semibold">Corporate</div>
                                                <div className="text-sm text-muted-foreground">
                                                    Contact sales
                                                </div>
                                            </div>
                                            <div className="ml-auto">
                                                <Button>Manage billing</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* ---------- Aparencia ---------- */}
                        {active === "Aparencia" && (
                            <>
                                <h2 className="text-lg font-semibold mb-4">Aparencia</h2>

                                <div className="grid gap-4">
                                    <div>
                                        <Label className={"pb-3"}>Tamanho da fonte</Label>
                                        <Select onValueChange={(v) => setFont(v)} value={font}>
                                            <SelectTrigger className="w-64">
                                                <SelectValue placeholder="Selecionar tamanho" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="inter">Inter</SelectItem>
                                                <SelectItem value="sans">System UI</SelectItem>
                                                <SelectItem value="serif">Serif</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Set the font used in the dashboard.
                                        </p>
                                    </div>

                                    <div>
                                        <Label className={"pb-3"}>Idioma</Label>
                                        <Select onValueChange={(v) => setFont(v)} value={font}>
                                            <SelectTrigger className="w-64">
                                                <SelectValue placeholder="Selecionar idioma" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="inter">Inter</SelectItem>
                                                <SelectItem value="sans">System UI</SelectItem>
                                                <SelectItem value="serif">Serif</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Set the font used in the dashboard.
                                        </p>
                                    </div>

                                    <div>
                                        <Label className={"pb-3"}>Tema</Label>
                                        <div className="flex items-start gap-6 mt-3">
                                            <button
                                                onClick={() => setTheme("light")}
                                                className={`rounded-lg border p-3 ${theme === "light" ? "border-primary" : "border-border"
                                                    }`}
                                                aria-pressed={theme === "light"}
                                            >
                                                <div className="w-32 h-20 bg-white border rounded" />
                                                <div className="text-sm mt-2 text-center">Light</div>
                                            </button>

                                            <button
                                                onClick={() => setTheme("dark")}
                                                className={`rounded-lg border p-3 ${theme === "dark" ? "border-primary" : "border-border"
                                                    }`}
                                                aria-pressed={theme === "dark"}
                                            >
                                                <div className="w-32 h-20 bg-slate-900 border rounded" />
                                                <div className="text-sm mt-2 text-center">Dark</div>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="pt-2">
                                        <Button>Update preferences</Button>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* ---------- NOTIFICATIONS ---------- */}
                        {active === "Notifications" && (
                            <>
                                <h2 className="text-lg font-semibold mb-4">Notifications</h2>

                                <div className="grid gap-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <Label>Email notifications</Label>
                                            <p className="text-sm text-muted-foreground">
                                                Receive summary and alert emails.
                                            </p>
                                        </div>
                                        <Switch
                                            checked={emailNotifications}
                                            onCheckedChange={(v) => setEmailNotifications(!!v)}
                                        />
                                    </div>

                                    <div>
                                        <Label>Mobile push</Label>
                                        <p className="text-sm text-muted-foreground">
                                            Configure push notifications on your devices.
                                        </p>
                                        <div className="mt-2">
                                            <Button variant="outline">Manage devices</Button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* ---------- DISPLAY ---------- */}
                        {active === "Display" && (
                            <>
                                <h2 className="text-lg font-semibold mb-4">Display</h2>
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Adjust interface density and display options.
                                    </p>
                                    <div className="mt-4 grid gap-3">
                                        <div>
                                            <Label>Interface density</Label>
                                            <Select>
                                                <SelectTrigger className="w-48">
                                                    <SelectValue placeholder="Default" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="compact">Compact</SelectItem>
                                                    <SelectItem value="default">Default</SelectItem>
                                                    <SelectItem value="comfortable">Comfortable</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div>
                                            <Label>Show advanced metrics</Label>
                                            <div className="mt-2">
                                                <Switch defaultChecked />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}
