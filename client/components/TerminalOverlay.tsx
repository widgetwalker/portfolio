import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function TerminalOverlay({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    const [history, setHistory] = useState<{ command: string; output: React.ReactNode }[]>([]);
    const [input, setInput] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    // Auto-focus input when opened
    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus();
            // Boot sequence
            if (history.length === 0) {
                setHistory([
                    {
                        command: "",
                        output: (
                            <div className="text-primary/80 mb-4 animate-pulse">
                                <p>INITIATING SERAPH_OS v2.4.1...</p>
                                <p>LOADING KERNEL................... [OK]</p>
                                <p>MOUNTING VIRTUAL FILESYSTEM...... [OK]</p>
                                <p>ESTABLISHING SECURE CONNECTION... [OK]</p>
                                <br />
                                <p className="text-accent font-bold">Welcome to DHEERAJ's Interactive Terminal.</p>
                                <p>Type <span className="text-primary font-bold">`help`</span> to see available commands.</p>
                            </div>
                        ),
                    },
                ]);
            }
        }
    }, [isOpen]);

    // Keep scroll at bottom
    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [history, isOpen]);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        const cmd = input.trim().toLowerCase();
        
        let output: React.ReactNode = "";

        switch (cmd) {
            case "help":
                output = (
                    <div className="pl-4">
                        <p><span className="text-accent">ls</span>       - List available directory sections</p>
                        <p><span className="text-accent">cd [dir]</span> - Navigate to a section (e.g. cd projects)</p>
                        <p><span className="text-accent">whoami</span>   - Print current user identity</p>
                        <p><span className="text-accent">resume</span>   - Download/view resume</p>
                        <p><span className="text-accent">clear</span>    - Clear terminal history</p>
                        <p><span className="text-accent">exit</span>     - Close the terminal</p>
                    </div>
                );
                break;
            case "ls":
                output = (
                    <div className="flex gap-4 pl-4 text-primary font-semibold">
                        <span className="cursor-pointer hover:underline" onClick={() => executeCommand("cd about")}>about/</span>
                        <span className="cursor-pointer hover:underline" onClick={() => executeCommand("cd projects")}>projects/</span>
                        <span className="cursor-pointer hover:underline" onClick={() => executeCommand("cd skills")}>skills/</span>
                        <span className="cursor-pointer hover:underline" onClick={() => executeCommand("cd timeline")}>timeline/</span>
                        <span className="cursor-pointer hover:underline" onClick={() => executeCommand("cd contact")}>contact/</span>
                    </div>
                );
                break;
            case "cd projects":
                navigate("/#projects");
                onClose();
                return; // exit early
            case "cd about":
                navigate("/#about");
                onClose();
                return;
            case "cd skills":
                navigate("/#skills");
                onClose();
                return;
            case "cd timeline":
                navigate("/#timeline");
                onClose();
                return;
            case "cd contact":
                navigate("/#contact");
                onClose();
                return;
            case "whoami":
                output = <p className="pl-4">Dheeraj - Tech & CS Student. Crafting performant game interfaces and dissecting Python algorithms.</p>;
                break;
            case "resume":
                output = (
                    <div className="pl-4 text-accent space-y-1">
                        <p className="animate-pulse">Initiating secure transfer protocol...</p>
                        <p>Locating encrypted dossier: <span className="text-primary font-bold">resume.pdf</span></p>
                        <p>Decryption successful. Opening file in new tab...</p>
                    </div>
                );
                // Trigger the physical download / open after a brief "hacking" delay
                setTimeout(() => {
                    window.open("/resume.pdf", "_blank");
                }, 1500);
                break;
            case "clear":
                setHistory([]);
                setInput("");
                return;
            case "exit":
                onClose();
                return;
            case "sudo":
                output = <p className="pl-4 text-destructive">dheeraj is not in the sudoers file. This incident will be reported.</p>;
                break;
            case "":
                break; // Do nothing for empty enter
            default:
                if (cmd.startsWith("cd ")) {
                    output = <p className="pl-4 text-destructive">cd: {cmd.replace("cd ", "")}: No such file or directory</p>;
                } else {
                    output = <p className="pl-4 text-destructive">Command not found: {cmd}</p>;
                }
        }

        setHistory((prev) => [...prev, { command: input, output }]);
        setInput("");
    };

    const executeCommand = (cmd: string) => {
        setInput(cmd);
        // We simulate a small delay to feel like a real terminal
        setTimeout(() => {
            const btn = document.getElementById("hidden-submit-btn");
            if (btn) btn.click();
        }, 100);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 backdrop-blur-sm bg-black/60"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) onClose();
                    }}
                >
                    <div className="w-full max-w-4xl h-[80vh] bg-black/90 border border-white/20 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col font-mono text-sm sm:text-base">
                        
                        {/* Fake Mac/Linux Window Header */}
                        <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-4 justify-between select-none shrink-0">
                            <div className="flex gap-2">
                                <button onClick={onClose} className="w-3 h-3 rounded-full bg-destructive/80 hover:bg-destructive transition" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="text-xs text-muted-foreground font-semibold font-sans tracking-widest uppercase">
                                root@dheeraj:~
                            </div>
                            <div className="w-10"></div>
                        </div>

                        {/* Terminal Body */}
                        <div 
                            className="flex-1 p-6 overflow-y-auto text-green-500/90"
                            onClick={() => inputRef.current?.focus()}
                        >
                            {history.map((entry, i) => (
                                <div key={i} className="mb-4">
                                    {entry.command && (
                                        <div className="flex gap-2 text-white/70">
                                            <span className="text-accent">guest@dheeraj:~$</span>
                                            <span>{entry.command}</span>
                                        </div>
                                    )}
                                    <div className="mt-1">{entry.output}</div>
                                </div>
                            ))}
                            
                            <form onSubmit={handleCommand} className="flex gap-2 items-center text-white/90">
                                <span className="text-accent shrink-0">guest@dheeraj:~$</span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    className="flex-1 bg-transparent outline-none border-none caret-primary"
                                    autoComplete="off"
                                    spellCheck="false"
                                    autoFocus
                                />
                                <button type="submit" id="hidden-submit-btn" className="hidden" />
                            </form>
                            <div ref={bottomRef} className="h-4" />
                        </div>

                        {/* Scanline overlay effect */}
                        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-20 z-10" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
