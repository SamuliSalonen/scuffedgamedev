import React, { useEffect, useState } from 'react';
import patchData from './patchnotes.json';
import "./patchnotes.scss";
const PatchNotes = (props) => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const reversed = [...patchData].reverse();
        setNotes(reversed);
    }, []);
    const formatText = (text) => {
        if (!text) return null;

        const lines = text.split(/\r?\n/);

        return lines.map((line, i) => {
            // Match the keyword (case-insensitive) at start of line after optional '* ' or whitespace
            const keywordMatch = line.match(/^(\*?\s*)(bugfix:|change:|feature:)/i);

            if (keywordMatch) {
                const [fullMatch, prefix, keyword] = keywordMatch;
                let className = '';

                if (/bugfix:/i.test(keyword)) className = 'patch-bugfix';
                else if (/change:/i.test(keyword)) className = 'patch-change';
                else if (/feature:/i.test(keyword)) className = 'patch-feature';

                const restOfLine = line.slice(fullMatch.length); // text after the keyword

                return (
                    <div key={i}>
                        {prefix}
                        <span className={className}>{keyword}</span>
                        {restOfLine}
                    </div>
                );
            }

            // No keyword, render plain
            return <div key={i}>{line}</div>;
        });
    };



    return (
        <div className="patchnotes-container">
            {notes.map((note) => (
                <div key={note.id} className="patchnote">
                    <h3>Patch {note.id}</h3>
                    <div className="patchnote-text">{formatText(note.text)}</div>
                </div>
            ))}
        </div>
    );

};

export default PatchNotes;