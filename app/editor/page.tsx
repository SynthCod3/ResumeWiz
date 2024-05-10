'use client';

import React, { useEffect } from 'react';
import { Editor } from './components/editor';
import { supabase } from '@/utils/supabase';
import { useEditorStore } from '@/utils/stores';

const EditorPage = () => {
  const setName = useEditorStore((state) => state.setName);
  const setSkills = useEditorStore((state) => state.setSkills);
  const setExperience = useEditorStore((state) => state.setExperience);
  const setEducation = useEditorStore((state) => state.setEducation);
  const setDescription = useEditorStore((state) => state.setDescription);
  const setContact = useEditorStore((state) => state.setContact);
  const setProjects = useEditorStore((state) => state.setProjects);
  const setImage = useEditorStore((state) => state.setImage); 
  const setSign = useEditorStore((state) => state.setSign);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    let { data: users, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', user?.id)
      .single();
    if (error) {
      throw error;
    } else if (users) {
      setName(users.data.name);
      setSkills(users.data.skills);
      setExperience(users.data.experience);
      setEducation(users.data.education);
      setDescription(users.data.description);
      setContact(users.data.contact);
      setProjects(users.data.projects);
      setImage(users.data.image);
      setSign(users.data.sign);
      return users;
    }
  };
  return (
    <div>
      <Editor />
    </div>
  );
};

export default EditorPage;
