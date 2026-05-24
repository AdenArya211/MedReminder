import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
  'https://jwfzshhjsjuxqbewkcdd.supabase.co';

const supabaseKey =
  'sb_publishable_JsukahLr0KbSb-nrKZTM8A_s4EtLfc4';

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);