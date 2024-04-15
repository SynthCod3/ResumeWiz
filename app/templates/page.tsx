'use client';

import { supabase } from "@/utils/supabase";
import { Templates } from "./components/templates"
import { useEditorStore } from "@/utils/stores";
import { useEffect } from "react";

const TemplatesPage = () => {
  const setName = useEditorStore((state) => state.setName);
  const setSkills = useEditorStore((state) => state.setSkills);
  const setExperience = useEditorStore((state) => state.setExperience);
  const setEducation = useEditorStore((state) => state.setEducation);
  const setDescription = useEditorStore((state) => state.setDescription);
  const setContact = useEditorStore((state) => state.setContact);
  const setProjects = useEditorStore((state) => state.setProjects);

  useEffect(() => {
    fetchData();
  }, [])

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
      return users;
    }
  };
  

  return (
	<Templates />
  )
}

export default TemplatesPage