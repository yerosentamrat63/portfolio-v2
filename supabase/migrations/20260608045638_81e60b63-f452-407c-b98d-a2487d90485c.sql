REVOKE SELECT, UPDATE, DELETE ON public.contact_messages FROM anon, authenticated;

CREATE POLICY "No public read access to contact messages"
ON public.contact_messages
FOR SELECT
TO anon, authenticated
USING (false);