'use client';

/* eslint-disable @next/next/no-img-element */
import { DragDropContext, Draggable } from '@hello-pangea/dnd';
import { useEffect, useState } from 'react';
import { ActionCreators } from 'redux-undo';

import { getReodered } from '@/helpers/get-reodered';
import { copyHtml } from '@/helpers/selected/copy-html';
import { copyMd } from '@/helpers/selected/copy-md';
import { StrictModeDroppable } from '@/shared/droppable-fix/droppble-fix';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  clearSelected,
  deleteFromSelected,
  getSelected,
  setSelected,
} from '@/store/selected-slice/selected-slice';
import { addCount } from '@/store/stats-slice/add-count-thunk';

import s from './selected.module.css';

export default function Selected(): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedBadges = useAppSelector(getSelected).selected;
  const [mdCopied, setMdCopied] = useState(false);
  const [htmlCopied, setHtmlCopied] = useState(false);

  const handleCopyMd = () => {
    copyMd(selectedBadges);
    setMdCopied(true);

    if (selectedBadges.length < 1) return;

    dispatch(addCount(selectedBadges.length || 0));
  };

  const handleCopyHtml = () => {
    copyHtml(selectedBadges);
    setHtmlCopied(true);

    if (selectedBadges.length < 1) return;

    dispatch(addCount(selectedBadges.length || 0));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMdCopied(false);
      setHtmlCopied(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [mdCopied, htmlCopied]);

  const handleOnDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const newSelected = getReodered(
      selectedBadges,
      source.index,
      destination.index
    );

    dispatch(setSelected(newSelected));
  };

  return (
    <div className={s.container}>
      <h2 className={s.h2}>Selected badges</h2>
      <div className={s.wrapper}>
        <div className={s.selected}>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <StrictModeDroppable
              direction='horizontal'
              droppableId='droppable'
            >
              {(provided, snapshot) => (
                <ul
                  {...provided.droppableProps}
                  className={s.badgesList}
                  ref={provided.innerRef}
                >
                  {selectedBadges && selectedBadges.length > 0
                    ? selectedBadges?.map((badge, index) => {
                        const { title, hex, id } = badge;

                        return (
                          <Draggable
                            draggableId={id || ''}
                            index={index}
                            key={id}
                          >
                            {(provided, snapshot) => (
                              <img
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                alt={title}
                                className={s.imgStandard}
                                onClick={() =>
                                  dispatch(deleteFromSelected(badge))
                                }
                                src={`https://img.shields.io/badge/${title}-${hex}?style=for-the-badge&logo=${title}&logoColor=${'FFF'}`}
                                suppressHydrationWarning
                              />
                            )}
                          </Draggable>
                        );
                      })
                    : 'Start by clicking on badges below'}
                  {provided.placeholder}
                </ul>
              )}
            </StrictModeDroppable>
          </DragDropContext>
        </div>
        <div className={s.controls}>
          <div
            className={`${s.control} ${s.undo}`}
            onClick={() => dispatch(ActionCreators.undo())}
          >
            Undo
          </div>
          <div
            className={`${s.control} ${s.clear}`}
            onClick={() => dispatch(clearSelected())}
          >
            Clear
          </div>
          <button
            className={`${s.control} ${s.copyHtml}`}
            onClick={handleCopyHtml}
          >
            {htmlCopied ? 'Copied!' : 'Copy Html'}
          </button>
          <button
            className={`${s.control} ${s.copyMarkdown}`}
            onClick={handleCopyMd}
          >
            {mdCopied ? 'Copied!' : 'Copy Markdown'}
          </button>
        </div>
      </div>
    </div>
  );
}
