"use client";

import React, { useRef, useState } from "react";
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import AboutMeTerminal from "../about-me/AboutMeTerminal";
import Footer from "../component/Footer";
import { ImperativePanelHandle } from "react-resizable-panels";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { contact_code } from "@/lib/terminalcode";

const displayedCode = `
const button = document.querySelector("#sendBtn");
    const message = {
    name: ,
    email: ,
    message: ,
    date: "Thu 21 Apr"
    }
  button.addEventListener('click', () => {
    form.send(message);
  })
`;

const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." }),
  email: z.string().min(2, { message: "Email must be a valid email." }).email(),
  messages: z
    .string()
    .min(4, { message: "Message must be at least 4 characters." }),
});

const Contact = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      messages: "",
    },
  });

  // Refs for controlling panel sizes
  const mainPanelRef = useRef<ImperativePanelHandle>(null);
  const terminalPanelRef = useRef<ImperativePanelHandle>(null);
  // Panel size constants
  const DEFAULT_TERMINAL_SIZE = 25;
  const DEFAULT_MAIN_SIZE = 75;
  const MAX_TERMINAL_SIZE = 50;
  const MIN_TERMINAL_SIZE = 15;

  // Function to toggle between expanded and default size
  const expandTerminal = () => {
    if (terminalPanelRef.current && mainPanelRef.current) {
      if (isExpanded) {
        // Collapse to default size
        terminalPanelRef.current.resize(DEFAULT_TERMINAL_SIZE);
        mainPanelRef.current.resize(DEFAULT_MAIN_SIZE);
        setIsExpanded(false);
      } else {
        // Expand to max size
        terminalPanelRef.current.resize(MAX_TERMINAL_SIZE);
        mainPanelRef.current.resize(100 - MAX_TERMINAL_SIZE);
        setIsExpanded(true);
      }
    }
  };

  const sendMessage = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`/api/send-message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: form.control._formValues.username,
          email: form.control._formValues.email,
          messages: form.control._formValues.messages,
        }),
      });

      if (res.status === 200) {
        console.log("Succeed");
      } else if (res.status === 500) {
        console.error("Bad Request");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <div className="w-full min-h-9 border-b border-b-slate-700 bg-[var(--navy-background)] flex flex-shrink-0">
        {/* Header */}
        <div
          className={`group flex flex-row items-center justify-between px-4 py-2 text-xs font-mono bg-[var(--dark-background)] border-r border-slate-800 cursor-pointer select-none transition-all min-w-0 text-slate-400 hover:text-white hover:bg-slate-800/50
                 
                `}
        >
          <span className="truncate whitespace-nowrap overflow-hidden max-w-[120px]">
            contact-form.ts
          </span>
        </div>
        {/* Resizable Panel Group */}
      </div>
      <ResizablePanelGroup direction="vertical" className="flex-1 w-full">
        {/* Main Content Panel */}
        <ResizablePanel ref={mainPanelRef} defaultSize={75} minSize={30}>
          <div className="flex flex-col lg:flex-row h-full overflow-hidden">
            {/* Sidebar */}
            <aside className="border-r border-slate-800 w-full lg:w-[50%] lg:block bg-gray-900 flex-shrink-0">
              <div className="relative overflow-hidden h-full">
                <div className="h-full w-full">
                  <div className="p-4 md:p-8 space-y-4">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(sendMessage)}>
                        <FormField
                          control={form.control}
                          name="username"
                          render={({ field }) => (
                            <FormItem className="text-white block space-y-2">
                              <FormLabel>Username:</FormLabel>
                              <FormControl>
                                <Input
                                  title="Your username"
                                  {...field}
                                  className="mb-4"
                                />
                              </FormControl>
                              <FormMessage className="mb-5" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem className="text-white block space-y-2">
                              <FormLabel>Email:</FormLabel>
                              <FormControl>
                                <Input
                                  title="Your email"
                                  {...field}
                                  className="mb-4"
                                />
                              </FormControl>
                              <FormMessage className="mb-5" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="messages"
                          render={({ field }) => (
                            <FormItem className="text-white block space-y-2">
                              <FormLabel>Messages:</FormLabel>
                              <FormControl>
                                <Textarea
                                  style={{ minHeight: "150px" }}
                                  title="Write your message here...  "
                                  placeholder="Write your message here...  "
                                  {...field}
                                  className="mb-4"
                                />
                              </FormControl>
                              <FormMessage className="mb-5" />
                            </FormItem>
                          )}
                        />
                        <Button
                          type="submit"
                          title="Submit your contact"
                          className="bg-slate-700 cursor-pointer hover:bg-slate-600 transform duration-300"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <Loader className="animate-spin" />
                          ) : (
                            "Send Message"
                          )}
                        </Button>
                      </form>
                    </Form>
                  </div>
                </div>
              </div>
            </aside>

            {/* Content */}
            <div className="flex flex-col w-full h-full bg-gray-900">
              <ScrollArea className="h-full p-4">
                <div className="relative hidden lg:flex flex-col gap-4 justify-center order-1 lg:order-2 h-full my-auto ">
                  <div className="relative w-full h-full transition-all duration-350  shadow-2xl min-h-[240px]">
                    {/* Terminal top bar */}
                    <div className="jsx-75ecec9be69de278 flex items-center gap-2 px-4 py-1.5 bg-[#e0e0e0] rounded-t-2xl border-b border-slate-300 select-none relative">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <div className="flex flex-1 justify-center left-0 right-0">
                        <span className="text-sm text-slate-700 text-center font-semibold">
                          Terminal — bunseueng@portfolio
                        </span>
                      </div>
                    </div>
                    <div className="rounded-b-2xl overflow-hidden bg-[#112240] border-t-0 border border-slate-700 p-0 sm:p-2 min-h-0 h-full w-full flex flex-col">
                      {/* Syntax highlighted code */}
                      <SyntaxHighlighter
                        language="javascript"
                        style={tomorrowNightEighties}
                        customStyle={{
                          margin: 0,
                          paddingTop: "0",
                          background: "#112240",
                          fontSize: "0.9rem",
                          height: "100%",
                          overflow: "auto",
                        }}
                        showLineNumbers={true}
                      >
                        {displayedCode}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-gray-500 font-semibold text-[14.5px] mt-2">{`// My Github Account:`}</p>
                  <span className="text-purple-400 text-sm">
                    const{" "}
                    <span className="text-yellow-400 text-sm">github</span> ={" "}
                    <span className="text-orange-400 text-sm">
                      &quot;https://github.com/bunseujjy&quot;
                    </span>
                  </span>
                  <p className="text-gray-500 font-semibold text-[14.5px] mt-2">{`// My LinkedIn Account:`}</p>
                  <span className="text-purple-400 text-sm">
                    const{" "}
                    <span className="text-yellow-400 text-sm">LinkedIn</span> ={" "}
                    <span className="text-orange-400 text-sm">
                      &quot;https://www.linkedin.com/in/bunseu-eng-6591a8333/&quot;
                    </span>
                  </span>
                  <p className="text-gray-500 font-semibold text-[14.5px] mt-2">{`// My Facebook Account:`}</p>
                  <span className="text-purple-400 text-sm">
                    const{" "}
                    <span className="text-yellow-400 text-sm">Facebook</span> ={" "}
                    <span className="text-orange-400 text-sm">
                      &quot;https://web.facebook.com/YuTuQJJ&quot;
                    </span>
                  </span>
                  <p className="text-gray-500 font-semibold text-[14.5px] mt-2">{`// CV:`}</p>
                  <span className="text-purple-400 text-sm">
                    const <span className="text-yellow-400 text-sm">CV</span> ={" "}
                    <span className="text-orange-400 text-sm">
                      &quot;https://www.canva.com/design/DAGo5rykqtw/HdmpljkuKHr4tWOTjocgCw/edit&quot;
                    </span>
                  </span>
                </div>
              </ScrollArea>
            </div>
          </div>
        </ResizablePanel>
        {/* Terminal Panel */}
        {!isOpen && (
          <ResizablePanel
            ref={terminalPanelRef}
            defaultSize={DEFAULT_TERMINAL_SIZE}
            minSize={MIN_TERMINAL_SIZE}
            maxSize={MAX_TERMINAL_SIZE}
          >
            {!isOpen && (
              <AboutMeTerminal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                onExpand={expandTerminal}
                code={contact_code}
              />
            )}
          </ResizablePanel>
        )}
        <Footer isOpen={isOpen} setIsOpen={setIsOpen} />
      </ResizablePanelGroup>
    </div>
  );
};

export default Contact;
