import * as React from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useState } from "react";
import { Box, Button } from "@mui/material";

interface RichTextEditorProps {
    endpoint: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ endpoint }) => {
    const [textEditor, setTextEditor] = useState("");

    const data = {
        textEditor: textEditor,
    };

    const handleSubmit = async (event: React.FormEvent) => {
        if (textEditor === "") {
            alert("Your post cannot be empty!");
            return;
        }

        event.preventDefault();

        // Retrieve the JWT token and UserID from localStorage
        const jwt = window.localStorage.getItem("jwt");

        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`,
            },
            body: JSON.stringify({
                Content: data.textEditor,
            }),
            credentials: "include",
        });

        if (response.ok) {
            alert("Posted successfully!");
        } else {
            alert("Post failed!");
            console.log(response);
        }
    };

    return (
        <Box style={{ width: "50%", height: "50%" }}>
            <form onSubmit={handleSubmit}>
                <CKEditor
                    editor={ClassicEditor}
                    data={textEditor}
                    // onReady={(editor) => {
                    //     // You can store the "editor" and use when it is needed.
                    // }}
                    onChange={(event, editor) => {
                        const data = editor.getData();

                        setTextEditor(data);
                    }}
                />
                <Button variant="contained" disableElevation disableTouchRipple type="submit">
                    Post
                </Button>
            </form>
        </Box>
    );
};

export default RichTextEditor;
