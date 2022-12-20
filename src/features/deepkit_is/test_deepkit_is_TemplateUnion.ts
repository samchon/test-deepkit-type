import { is } from "@deepkit/type";

import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_TemplateUnion = _test_deepkit_is(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) => is<TemplateUnion>(input),
    TemplateUnion.SPOILERS,
);