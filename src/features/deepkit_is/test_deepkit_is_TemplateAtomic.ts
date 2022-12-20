import { is } from "@deepkit/type";

import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_TemplateAtomic = _test_deepkit_is(
    "TemplateAtomic",
    TemplateAtomic.generate,
    (input) => is<TemplateAtomic>(input),
    TemplateAtomic.SPOILERS,
);